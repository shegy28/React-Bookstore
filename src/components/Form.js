import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" name="title" id="title" placeholder='Add Book Title' />
                <select name="author" id="author">
                    <option value="shakespear">Shakespear</option>
                    <option value="arthur-c-d">Arthur Conan Doyle</option>
                    <option value="jk-rowling">JK Rowling</option>
                    <option value="jane-austin">Jane Austen</option>
                </select>
            </form>
        </div>
    )
}

export default Form