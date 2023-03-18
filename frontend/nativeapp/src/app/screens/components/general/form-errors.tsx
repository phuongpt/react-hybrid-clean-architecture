import { styled } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

const StyledView = styled(View)
const StyledText = styled(Text)

interface FormErrors {
    erros: { [key: string]: string }
}
export const FormErrors = ({ erros }: FormErrors) =>
    <StyledView className='formErrors'>
        <StyledView className="list-disc mt-2">
            {Object.keys(erros).map((fieldName, i) => {
                if (erros[fieldName].length > 0) {
                    return (
                        <StyledText className="text-sm itali text-red-600" key={i}>
                            {erros[fieldName]}
                        </StyledText>
                    )
                } else {
                    return '';
                }
            })}
        </StyledView>

    </StyledView>