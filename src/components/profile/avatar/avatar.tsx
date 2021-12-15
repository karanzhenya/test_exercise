import React from 'react';
import s from './avatar.module.css'

type AvatarPropsType = {
    avatar_url: string
}

export const Avatar = (props: AvatarPropsType) => {
    return (
        <div className={s.avatar}>
            {props.avatar_url !== '' ? <img alt='avatar' src={props.avatar_url}/> : null}
        </div>
    )
}