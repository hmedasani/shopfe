import React from 'react'
import Link from 'next/link'

const FormatNavList = (list: {label: string, href: string}[], classNames: string) => {
    return list.map(item => (
        <Link
            key={item.href}
            href={item.href}
            className={classNames}
        >
            {item.label}
        </Link>
    ));
}

export default FormatNavList
