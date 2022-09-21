
import {Button} from '@chakra-ui/react';

interface Props {
    children ?: any ,
    width ?: any,
    color ?: any ,
    px ?: any,
    bg ?: any,
    onClick ?: any
    
}

const  InterfaceButton =( {width , color, children, px, bg, onClick} : Props ) => {
    return (
        <>

            <Button width={width} color={color} _hover={{}}
             onClick={onClick}
             px={px ? px : '3em'} p={'1.5em'} bg={bg} my={'1em'}>
                {children}
            </Button>
        
        </>
    )
}

export default InterfaceButton;