import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any-DONE
    addUserCallback: (name: string) => void // need to fix any-DONE
}

export const pureAddUser = (
    name: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addUserCallback: (name: string) => void
) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут-DONE
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
        setError('')
    }
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку-DONE
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить-DONE
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any-DONE
    const [error, setError] = useState<string>('') // need to fix any-DONE
    const [lastAddedUserName, setLastAddedUserName] = useState<string | ''>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any-DONE
        setName(e.currentTarget.value) // need to fix-DONE

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setLastAddedUserName(name)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
        error && setError('Ошибка! Введите имя!')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix-DONE

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastAddedUserName={lastAddedUserName}
        />
    )
}

export default GreetingContainer
