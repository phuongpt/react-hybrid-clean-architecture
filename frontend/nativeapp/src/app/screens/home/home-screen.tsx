import { signOutAction } from 'core';
import { styled } from 'nativewind';
import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    Header,
} from 'react-native/Libraries/NewAppScreen';
import { useAppDispatch, useAppSelector } from '../../hook';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);


function HomeScreen(): JSX.Element {
    const user = useAppSelector(s => s.user).data;
    const dispatch = useAppDispatch();

    const onSignOut = () => {
        dispatch(signOutAction());
    }
    return (
        <SafeAreaView >
            <Header />
            <StyledView className="justify-center content-center items-center">
                <StyledText className="font-bold text-lg mt-48">
                    Hello {user?.name}!
                </StyledText>

                <StyledButton onPress={onSignOut} className="bg-primary-600 rounded-lg text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  mt-5">
                    <StyledText className="font-medium text-white self-center">Sign out</StyledText>
                </StyledButton>


            </StyledView>
        </SafeAreaView>
    );
}

export default HomeScreen;
