import React, { FormEvent } from 'react'
import { State } from '../graphql-server/src/statesAPI'
import { Form } from './styled'
import { Address } from '../graphql-server/src/watherAPI'
const FormInput = (props: { setAddress: React.Dispatch<React.SetStateAction<Address>> }) => {
    const [states, setStates] = React.useState<State[]>([])
    const submitAction = (evt: FormEvent) => {
        evt.preventDefault()
        const formData = new FormData(evt.currentTarget as HTMLFormElement)
        props.setAddress({
            street: formData.get('street') as string || '',
            city: formData.get('city') as string || '',
            state: formData.get('state') as string || ''
        })
    }
    React.useEffect(() => {
        const query = {
            query: `{states { name,abbreviation } }`
        };
        const url = `http://localhost:4000/graphql`;
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(query)
            }).then(response => {
                response.json().then(data => {
                    const { states } = data.data;
                    setStates(states || [])
                })
            },
                reject => {
                    setStates([])
                })
        }
        catch (e) {
            setStates([])
            console.log(e)
        };
    }, [])

    return <Form onSubmit={submitAction}>
        <label style={{ display: 'block' }} htmlFor='street'>Street</label>
        <input id='street' name='street'
            required placeholder='Type street name' />
        <label style={{ display: 'block' }} htmlFor='city'>City</label>
        <input id='city' name='city'
            required placeholder='Type city name' />
        <label style={{ display: 'block' }} htmlFor='state'>State</label>
        <select id='state' name='state' required>
            {states.map(s => <option key={s.abbreviation} value={s.abbreviation}>{s.name}</option>)}
        </select>
        <button type='submit'>Submit</button>
    </Form>
}

export default FormInput