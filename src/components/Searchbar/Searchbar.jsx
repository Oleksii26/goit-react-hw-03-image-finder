
import React from 'react'


export class Searchbar extends React.Component {
    state = {
        query: ''
    }
    handleChange = ({ target: { value: query } }) => {
        this.setState({ query })
    }
    handleSubmitForm = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }
    render() {
        const { query } = this.state
        return (<header className='Searchbar'>
            <form onSubmit={this.handleSubmitForm} className='SearchForm'>
                <button type="submit" className='SearchForm-button'>
                    <span className="button-label">Search</span>
                </button>
                <input
                    className='SearchForm-input'
                    type="text"
                    autoComplete='off'
                    value={query}
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                />
            </form>
        </header>)
    }
}



    // state = {
    //     query: '',
    // }
    // handleNameChange = e => {
    //     this.setState({ query: e.currentTarget.value.toLowerCase() })
    // }
    // handleSubmit = e => {
    //     e.preventDefault()
    //     if(this.state.query.trim() === '') {
    //         alert('Enter a request')
    //         return
    //     }
    //     this.props.onSubmit(this.state.query)
    //     this.setState({ query: '' })
    // }

