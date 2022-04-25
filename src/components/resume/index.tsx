import * as Styled from './styles'
import { useEffect, useState,useRef } from 'react'

const Resume = () => {
    const toggleButtonMore = useRef() as React.MutableRefObject<HTMLSpanElement>
    const toggleButtonLess = useRef() as React.MutableRefObject<HTMLSpanElement>
    const [showMore, setShowMore] = useState(Boolean)

    useEffect(() => {
        const texts = document.querySelectorAll('.additional-content')

        if(showMore) {
            texts.forEach(text => {
                text.classList.remove('hidden')
                text.classList.add('show')
            })
            toggleButtonMore.current.classList.toggle('show')
            toggleButtonLess.current.classList.toggle('show')
        } else {
            texts.forEach(text => {
                text.classList.remove('show')
                text.classList.add('hidden')
            })
            toggleButtonMore.current.classList.toggle('show')
            toggleButtonLess.current.classList.toggle('show')
        }
    },[showMore])

    return (
        <Styled.Container>
            <Styled.TitleContainer>
                Resumo
            </Styled.TitleContainer>
            <Styled.TextsContainer>
            <p className='first-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
                <span ref={toggleButtonMore} className='show' onClick={() => setShowMore(!showMore)}>ver mais</span>
            </p>
            <br />
            <p className='additional-content'>
                Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
            </p>
            <br />
            <p className='additional-content'>
                Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
            </p>
            <br />
            <p className='additional-content'>
                Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

                <span ref={toggleButtonLess} onClick={() => setShowMore(!showMore)}>ver menos</span>
            </p>
            </Styled.TextsContainer>
        </Styled.Container>
    )
}

export default Resume;