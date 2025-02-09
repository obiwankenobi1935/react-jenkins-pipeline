import whiplash from './images/whiplash.jpg'
import pulpfiction from './images/pulpfiction.jpg'
import {
    Grid,
    Flex,
    Box,
    Separator,
    Radio
} from '@radix-ui/themes'
import Card1 from './card'
import Featuredsomething from './featured-articles'
import her from './images/her.jpg'
import Button1 from './button'


    function Cardlist()
    {
        return (
            <div>
                
            <Box style={{margin: '10px'}}>
                <Featuredsomething txt='Featured Articles'/>
            </Box>
            
            <Flex justify='center' display='inline-flex' gap='4' style={{marginLeft: '15vw'}} wrap='wrap'>
                <Card1 
                    img={whiplash}
                    moviename='Whiplash'
                    quote='There are no two words in the English language more harmful than "good job".'
                    username='Kavish Choudhary' />

                <Card1 
                    img={pulpfiction}
                    moviename='Pulp Fiction'
                    quote='Say what again. Say what again, I dare you, I double dare you motherfucker, say what one more Goddamn time!'
                    username='Kavish Choudhary' />

                <Card1 
                    img={her}
                    moviename='Her'
                    quote='I think anybody who falls in love is a freak. It is a crazy thing to do. It is kind of like a form of socially acceptable insanity.'
                    username='Kavish Choudhary' />

            </Flex>
            <Button1 txt='See all Articles' />

            </div>
        )
    }

    export default Cardlist