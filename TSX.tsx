import React from 'react';
const Child = React.memo(
    ({count}) => {
        return <div>{count}</div>
    },
    (preProps, nextProps) => {
        return preProps.count === nextProps.count
    }
)