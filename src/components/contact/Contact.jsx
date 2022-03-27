import './Contact.css'

import { ValidationError, useForm } from '@formspree/react';

import React from 'react';

//TODO mobile styling, text in json file, animations
const Skills = () => {

    const [state, handleSubmit] = useForm("xbjwagrl");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className='contact panel'>
            <div className='formWrapper'>
                <h2 className='formTitle'>Skontaktuj się ze mną</h2>
                <form onSubmit={handleSubmit}>
                    <div className='formEmail'>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="E-mail"
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
                            placeholder="Treść..."
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className='formButton'>
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Skills;