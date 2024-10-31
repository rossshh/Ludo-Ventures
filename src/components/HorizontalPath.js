import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'

const HorizontalPath = React.memo(({cells,color}) => {
    const groupedCells=useMemo(()=>{
        const groups=[]
        for(let i=0;i<cells.length;i+=6) {
            groups.push(cells.slice(i,i+3));
        }
        return groups;
    },[cells]);
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column',width:'100%',height:'100%'}}>
        {groupedCells.map((group,groupIndex)=>(
            <View key={`group=${groupIndex}`} style={{flexDirection:'row',width:'16.7%',height:'33.3%'}}>
                {group.map((id)=>{
                    return(
                        <Cell key={`cell-${_id}`} id={id} color={color} />
                    )
                })}
            </View>
        ))}
      </View>
    </View>
  )
});

export default HorizontalPath

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'40%',
        height:'100%',
        alignItems:'center'
    }
})