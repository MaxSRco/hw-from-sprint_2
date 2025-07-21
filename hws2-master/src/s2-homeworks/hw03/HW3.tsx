import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType-DONE
* 2 - указать нужный тип в useState с users-DONE
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами-DONE
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов-DONE
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error-DONE
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback-DONE
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами-DONE
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, )
* 9 - в файле Greeting.tsx дописать типизацию пропсов
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any-DONE
    name: string // need to fix any-DONE
}

export const pureAddUserCallback = (name: string, setUsers: any, users: UserType[]) => { // need to fix any
    const user = { // need to fix
        _id: v1(),
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any-DONE

    const addUserCallback = (name: string) => { // need to fix any-DONE
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
