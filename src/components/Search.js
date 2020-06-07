import React from 'react'

function Search ({handleInput,search}) {
    return (
        <section className = "searchbox-wrap">
            <input 
                type = "test" 
                placeholder = "search for a movie" 
                className = "searchbox" 
                onChange = {handleInput}
                onKeyPress = {search}
            />
        </section>
    )
}

export default Search
