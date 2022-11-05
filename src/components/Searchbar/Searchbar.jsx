
import React from 'react'
import css from './Searchbar.module.css'


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
        return (<header className={css.header}>
            <form onSubmit={this.handleSubmitForm} className={"form"}>
                <button type="submit" className={"button"}>
                    <span className="button-label">Search</span>
                </button>
                <input
                    className={"input"}
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

