import myImage from './images/oppenheimer.jpg'
import { AspectRatio } from '@radix-ui/themes'
function Image(){
    return (
            <div>
               <AspectRatio ratio={16/9}>
               <img src={myImage}
             alt='something'
             style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
             }}></img>
               </AspectRatio>
                </div>
        
    )
}

export default Image