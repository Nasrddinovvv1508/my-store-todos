import React from 'react'

function FormInput({ type, inputPlaceholder, name }) {
    return (
        <div className='w-96'>
            <label className="input input-bordered flex items-center gap-2">
                <input name={name} type={type} className="grow" placeholder={inputPlaceholder} />
            </label>
        </div>
    )
}

export default FormInput