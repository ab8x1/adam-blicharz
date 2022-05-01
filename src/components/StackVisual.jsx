import {StackContainer, Tool, Icon, Circle} from '../styles/aboutMeStyles'
import Img from './Img'
import Image from 'next/dist/client/image'
import projects from '../consts/projects'

export default function StackVisual(){
    return(
        <div className='relativeContainer'>
            <StackContainer>
                <Circle>
                    <Image src="/code.png" width={50} height={50} alt="harvest growth" priority={true} quality={60}/>
                </Circle>
                <div className='relativeContainer'>
                    {
                        projects.map(({name, imgUrl, dimensions, background, position}) =>
                            <div key={name} style={{...position, position: 'absolute'}}>
                                <div className='relativeContainer'>
                                    <Tool>
                                        <Icon className='centerFlex' style={background}>
                                            <Img src={`/stack/${imgUrl}`} {...dimensions} alt={name}/>
                                        </Icon>
                                        {name}
                                    </Tool>
                                </div>
                            </div>
                        )
                    }
                </div>
            </StackContainer>
        </div>
    )
}