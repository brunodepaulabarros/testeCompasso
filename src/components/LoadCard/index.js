import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {
    ContainerBodyLoading, ContainerLoading
} from './styles';

const LoadCard = () => {
    return (
        <ContainerLoading>
            <SkeletonPlaceholder>
                <ContainerBodyLoading>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", margin: 5 }}>
                        <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                        <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 30 }}>
                        <View>
                            <View style={{ width: 80, height: 20, borderRadius: 4 }} />
                            <View style={{ width: 80, height: 20, borderRadius: 4, marginTop: 5 }} />
                        </View>
                        <View style={{ width: 80, height: 80, borderRadius: 50 }} />
                    </View>
                </ContainerBodyLoading>
            </SkeletonPlaceholder>
        </ContainerLoading >
    );
}

export default LoadCard;