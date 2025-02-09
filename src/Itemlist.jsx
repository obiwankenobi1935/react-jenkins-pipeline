import ncom from './images/ncom.jpg'
import knivesout from './images/knivesout.jpg'
import {
    Flex,
    Box,
} from '@radix-ui/themes'
import Card1 from './card'
import Featuredsomething from './featured-articles'
import donniedarko from './images/donniedarko.jpg'
import Button1 from './button'

    function Itemlist()
    {
        return (
            <div>
                
            <Box style={{marginTop: '40px', marginBottom: '10px'}}>
                <Featuredsomething txt='Featured Tutorials'/>
            </Box>
            
            <Flex justify='center' display='inline-flex' gap='4' style={{marginLeft: '15vw'}} wrap='wrap'>
                <Card1 
                    img={donniedarko}
                    moviename='Donnie Darko'
                    quote='I hope that when the world comes to an end, I can breathe a sigh of relief, because there will be so much to look forward to.'
                    username='Kavish Choudhary' />

                <Card1 
                    img={ncom}
                    moviename='No Country For Old Men'
                    quote='You never know what worse luck your bad luck has saved you from.'
                    username='Kavish Choudhary' />

                <Card1 
                    img={knivesout}
                    moviename='Knives Out'
                    quote='What were the overheard words by the motherfucing Nazi child in the bathroom?'
                    username='Kavish Choudhary' />

            </Flex>
            <Button1 txt='See all Tutorials' />

            </div>
        )
    }

    export default Itemlist