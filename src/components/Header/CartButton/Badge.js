import React from 'react';
import styles from './HeaderCartButton.module.css'

const Badge = (props) => {
    return (
        <>
            {
                props.sum > 0 &&
                <div className={styles.badge}>
                    {props.sum}
                </div>
            }
        </>
    );
};

export default Badge;