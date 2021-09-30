import React from 'react';
import {
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';
import {IconButton, TwoPointSlider,TextButton, TextIconButton} from '../../components';

import {COLORS, SIZES, FONTS, constants, icons} from '../../constants'; 

const Section = ({containerStyle,children,title}) => {
    return(
        <View
            style={{
                marginTop:SIZES.padding,
                ...containerStyle
            }}
        >
            <Text style={{...FONTS.h3}}>{title}</Text>
            {children}
        </View>
    )
}

const FilterModal = ({isVisiable,onClose}) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current
    const [showFilterModal, setShowFilterModal] = React.useState(isVisiable)
    const [deliveryTime, setDeliveryTime] = React.useState("")
    const [rating,setRating] = React.useState("")
    const [tags,setTags] = React.useState("")

    React.useEffect(()=>{
        if(showFilterModal){
            Animated.timing(modalAnimatedValue, {
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start();
        }else{
            Animated.timing(modalAnimatedValue, {
                toValue:0,
                duration:500,
                useNativeDriver:false
            }).start(() =>onClose());
        }
    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[SIZES.height, SIZES.height -550]
    })

    function renderDistance(){
        return(
            <Section
                title="Distance"
            >
                <View
                    style={{
                        alignItems:'center'
                    }}
                >
                    <TwoPointSlider 
                        values={[3,10]}
                        min={1}
                        max={20}
                        postfix="km"
                        onValuesChange={(values) => console.log(values)}
                    />  
                </View>
            </Section>
        )
    }

    function renderDeliveryTime() {
        return(
            <Section
                title="Delivery Time"
                containerStyle={{
                    marginTop:40
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        flexWrap:'wrap',
                        marginTop:SIZES.base
                    }}
                >
                    {constants.delivery_time.map((item,index) =>(
                        <TextButton
                            key={`delivery_tiem-${index}`}
                            label={item.label}
                            labelStyle={{
                                color:item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                ...FONTS.body3
                            }}
                            buttonContainerStyle={{
                                width:'30%',
                                height:30,
                                margin:5,
                                alignItems: 'center',
                                borderRadius:SIZES.base,
                                backgroundColor:item.id == deliveryTime ? COLORS.primary :
                                COLORS.lightGray2 
                            }}
                            onPress={() => setDeliveryTime(item.id)}
                        />
                    ))}
                </View>
            </Section>
        )
    }

    function renderPricingRange(){
        return(
            <Section
                title="Pricing Range"
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TwoPointSlider 
                        values={[10,50]}
                        min={1}
                        max={100}
                        prefix="$"
                        postfix=""
                        onValuesChange={(values) =>console.log(values)}
                    />
                </View>
            </Section>
        )
    }
    
    function renderRating(){
        return(
            <Section
                title="Ratings"
                containerStyle={{
                    marginTop:40
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {constants.ratings.map((item,index) => (
                        <TextIconButton 
                            key={`Ratings-{index}`}
                            containerStyle={{
                                flex:1,
                                height:50,
                                margin:5,
                                alignItems: 'center',
                                borderRadius:SIZES.base,
                                backgroundColor:item.id == rating ? COLORS.primary : COLORS.lightGray2
                            }}
                            label={item.label}
                            labelStyle={{
                                color:item.id == rating ? COLORS.white : COLORS.gray
                            }}
                            icon={icons.star}
                            iconStyle={{
                                color:item.id == rating ? COLORS.white : COLORS.gray
                            }}
                            onPress={() =>setRating(item.id)}
                        />
                    ))}
                </View>
            </Section>
        )
    }

    function renderTags(){
        return(
            <Section
                title="Tags"
            >
                <View
                    style={{
                        flexDirection:'row',
                        flexWrap:'wrap'
                    }}
                >
                    {constants.tags.map((item,index) => (
                        <TextButton 
                            key={`Tags-${item.id}`}
                            label={item.label}
                            labelStyle={{
                                color:item.id == tags ? COLORS.white : COLORS.gray,
                                ...FONTS.h3
                            }}
                            buttonContainerStyle={{
                                height:50,
                                margin:5,
                                paddingHorizontal:SIZES.padding,
                                alignItems: 'center',
                                borderRadius:SIZES.base,
                                backgroundColor:item.id == tags ? COLORS.primary : COLORS.lightGray2
                            }}
                            onPress={() =>setTags(item.id)}
                        />
                    ))}
                </View>
            </Section>
        )
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisiable}
        >
            <View
                style={{
                    flex:1,
                    backgroundColor:COLORS.transparentBlack7
                }}
            >   
                {/* Transparent background */}
                <TouchableWithoutFeedback
                    onPress={() =>setShowFilterModal(false)}
                >
                    <View
                        style={{
                            position:'absolute',
                            top:0, 
                            left:0,
                            right:0,
                            bottom:0,
                        }}
                    >
                    </View>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{
                        position:'absolute',
                        left:0,
                        top:modalY,
                        width:'100%',
                        height:'100%',
                        padding:SIZES.padding,
                        borderTopLeftRadius:SIZES.padding,
                        borderTopRightRadius:SIZES.padding,
                        backgroundColor:COLORS.white
                    }}
                >
                    {/*Header */}
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{...FONTS.h3,flex:1, fontSize:18}}>
                            Filter Your Search
                        </Text>
                        <IconButton 
                            containerStyle={{
                                borderWidth:2,
                                borderRadius:10,
                                borderColor:COLORS.gray
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor:COLORS.gray2
                            }}
                            onPress={() => setShowFilterModal(false)}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom:250
                        }}
                    >
                        {/*Distance */}
                        {renderDistance()}
                        {/*Time */}
                        {renderDeliveryTime()}
                        {/*Pricing */}
                        {renderPricingRange()}
                        {/*Rating */}
                        {renderRating()}
                        {/*Tags */}
                        {renderTags()}
                    </ScrollView>
                    {/*Apply Button */}
                    <View
                        style={{
                            position:'absolute',
                            bottom:150,
                            left:0,
                            right:0,
                            height:110,
                            paddingHorizontal:SIZES.padding,
                            paddingVertical:SIZES.radius,
                            backgroundColor:COLORS.white
                        }}
                    >
                        <TextButton 
                            label="Apply Filters"
                            buttonContainerStyle={{
                                height:50,
                                borderRadius:SIZES.base,
                                backgroundColor:COLORS.primary
                            }}
                            onPress={() =>console.log("Appy Filter")}
                        />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

export default FilterModal;