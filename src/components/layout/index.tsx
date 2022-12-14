import React from 'react';
import './styles.css'

export const Layout = (props: { children: any }) => {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    )
}