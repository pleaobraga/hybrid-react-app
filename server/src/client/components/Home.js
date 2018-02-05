import React from 'react'

const Home = () => {
    return (
        <div>   
            <div>I'm the home compoenent</div>
            <button onClick={ () => alert('Hi There')} >Press me</button>
        </div>
    )
}

export default Home