import './Contact.css'
import './Contact-mobile.css'

import React, { useContext } from 'react';
import { ValidationError, useForm } from '@formspree/react';

import { StoreContext } from '../../store/StoreProvider';

//TODO mobile styling, text in json file, animations
const Skills = () => {

    const [state, handleSubmit] = useForm("xbjwagrl");

    const { languageText: { contact } } = useContext(StoreContext)

    if (state.succeeded) {
        return (
            <div className='contact panel'>
                <div className='formWrapper'>
                    <p className='feedbackMessage'>{contact.feedback}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='contact panel'>
            <div className='formWrapper'>
                <h2 className='formTitle'>{contact.title.toUpperCase()}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='formEmail'>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder={contact.email}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='formMessage'>
                        <textarea
                            id="message"
                            name="message"
                            placeholder={contact.content}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className='formButton'>
                        <button type="submit" disabled={state.submitting}>
                            {contact.submit}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Skills;