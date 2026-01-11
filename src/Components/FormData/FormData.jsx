import React from 'react';

const FormData = () => {
    const handleSubmit = (fromData) => {
        const name = fromData.get('name');
        const email = fromData.get('email');
        console.log(name, email);
    }
    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormData;