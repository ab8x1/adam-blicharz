const projects = [
    {
        name: 'React',
        imgUrl: 'react.svg',
        dimensions: {width: 30, height: 30},
        background: {},
        position: {left: '50%', top: '0', transform: 'translate(-50%, -50%)'},
        animation: {hidden: {y: -20, opacity: 0}}
    },
    {
        name: 'NextJS',
        imgUrl: 'next_js.svg',
        dimensions: {width: 30, height: 30},
        background: {backgroundColor: 'white'},
        position: {right: '-35px', top: '20%'},
        animation: {hidden: {x: 20, opacity: 0}}
    },
    {
        name: 'MongoDB',
        imgUrl: 'mongodb.png',
        dimensions: {width: 24, height: 24},
        background: {backgroundColor: '#E9E9E9'},
        position: {right: '-50px', bottom: '20%'},
        animation: {hidden: {x: 20, opacity: 0}}
    },
    {
        name: 'Ubuntu',
        imgUrl: 'ubuntu.png',
        dimensions: {width: 48, height: 48},
        background: {},
        position: {left: '50%', bottom: '0', transform: 'translate(-50%, 50%)'},
        animation: {hidden: {y: 20, opacity: 0}}
    },
    {
        name: 'EXPRESS',
        imgUrl: 'express.png',
        dimensions:{width: 32, height: 32},
        background: {},
        position: {left: '-50px', bottom: '20%'},
        animation: {hidden: {x: -20, opacity: 0}}
    },
    {
        name: 'NodeJs',
        imgUrl: 'node_js.svg',
        dimensions: {width:32, height: 32},
        background: {backgroundColor: '#68A063'},
        position: {left: '-30px', top: '20%'},
        animation: {hidden: {x: -20, opacity: 0}}
    },

]

export default projects;