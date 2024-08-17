import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
<div>


<footer style={{ backgroundColor: '#4790fc', darkMode: { backgroundColor: '#1A202C' } }}>
    <div style={{ margin: '0 auto', width: '100%', maxWidth: '1280px', padding: '16px', paddingTop: '24px', paddingBottom: '24px', lg: { paddingTop: '32px', paddingBottom: '32px' } }}>
        <div style={{ md: { display: 'flex', justifyContent: 'space-between' } }}>
            <div style={{ marginBottom: '24px', md: { marginBottom: '0' } }}>
                <a href="https://flowbite.com/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="FlowBite Logo" style={{ height: '32px', marginRight: '12px' }} />
                    <span style={{ alignSelf: 'center', fontSize: '24px', fontWeight: '600', whiteSpace: 'nowrap', darkMode: { color: 'white' } }}>Flowbite</span>
                </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', sm: { gap: '24px', gridTemplateColumns: 'repeat(3, 1fr)' } }}>
                <div>
                    <h2 style={{ marginBottom: '24px', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: '#0D2B52)', darkMode: { color: '#0D2B52)' } }}>Resources</h2>
                    <ul style={{ color: '#0D2B52)', darkMode: { color: '#0D2B52)' }, fontWeight: '500' }}>
                        <li style={{ marginBottom: '16px' }}>
                            <a href="https://flowbite.com/" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 style={{ marginBottom: '24px', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: '#1A202C', darkMode: { color: 'white' } }}>Follow us</h2>
                    <ul style={{ color: '#6B7280', darkMode: { color: '#9CA3AF' }, fontWeight: '500' }}>
                        <li style={{ marginBottom: '16px' }}>
                            <a href="https://github.com/themesberg/flowbite" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 style={{ marginBottom: '24px', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: '#1A202C', darkMode: { color: 'white' } }}>Legal</h2>
                    <ul style={{ color: '#6B7280', darkMode: { color: '#9CA3AF' }, fontWeight: '500' }}>
                        <li style={{ marginBottom: '16px' }}>
                            <a href="#" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr style={{ marginTop: '24px', marginBottom: '24px', borderColor: '#0D2B52', sm: { marginLeft: 'auto', marginRight: 'auto' }, darkMode: { borderColor: '#0D2B52)' }, lg: { marginTop: '32px', marginBottom: '32px' } }} />
        <div style={{ sm: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}>
            <span style={{ fontSize: '12px', color: '#6B7280', sm: { textAlign: 'center' }, darkMode: { color: '#9CA3AF' } }}>© 2023 <a href="https://flowbite.com/" style={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>Flowbite™</a>. All Rights Reserved.
            </span>
            <div style={{ display: 'flex', marginTop: '16px', sm: { justifyContent: 'center', marginTop: '0' } }}>
                <a href="#" style={{ color: '#0D2B52', ':hover': { color: '#0D2B52' }, darkMode: { ':hover': { color: '#0D2B52' } } }}>
                    <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    <span style={{ display: 'none' }}>Facebook page</span>
                </a>
                <a href="#" style={{ color: '#6B7280', marginLeft: '20px', ':hover': { color: '#1A202C' }, darkMode: { ':hover': { color: 'white' } } }}>
                    <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span style={{ display: 'none' }}>Discord community</span>
                </a>
                <a href="#" style={{ color: '#6B7280', marginLeft: '20px', ':hover': { color: '#1A202C' }, darkMode: { ':hover': { color: 'white' } } }}>
                    <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M5.64 0c-.401 0-.79.176-1.074.488L.613 4.959c-.5.551-.613 1.28-.306 1.936.307.655.97 1.083 1.708 1.083h1.202l-.97 4.138c-.143.606.07 1.235.557 1.628.488.392 1.151.48 1.72.23l2.456-1.103 2.81 1.102c.569.224 1.232.135 1.719-.231.487-.392.7-1.022.558-1.628l-.971-4.138h1.203c.737 0 1.401-.428 1.707-1.083.307-.655.194-1.385-.306-1.935L15.435.488A1.466 1.466 0 0 0 14.361 0H5.64Zm-.425 6.99c-.564 0-1.018.428-1.018.955 0 .527.454.955 1.018.955.563 0 1.017-.428 1.017-.955 0-.527-.454-.955-1.017-.955Zm9.17 0c-.564 0-1.017.428-1.017.955 0 .527.453.955 1.017.955.563 0 1.017-.428 1.017-.955 0-.527-.454-.955-1.017-.955Z" clipRule="evenodd"/>
                    </svg>
                    <span style={{ display: 'none' }}>Twitter page</span>
                </a>
                <a href="#" style={{ color: '#6B7280', marginLeft: '20px', ':hover': { color: '#1A202C' }, darkMode: { ':hover': { color: 'white' } } }}>
                    <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0c-.783 0-1.564.09-2.326.266a9.84 9.84 0 0 0-2.167.79c-.7.331-1.366.758-1.967 1.267a9.973 9.973 0 0 0-1.61 1.612 9.8 9.8 0 0 0-.873 1.233A10.051 10.051 0 0 0 0 9.998c0 .782.09 1.564.266 2.326a9.861 9.861 0 0 0 .79 2.167c.331.7.758 1.366 1.267 1.967a9.974 9.974 0 0 0 1.612 1.61c.373.324.771.622 1.233.873a10.056 10.056 0 0 0 2.167.79c1.561.348 3.208.348 4.769 0a9.862 9.862 0 0 0 2.167-.79c.7-.331 1.366-.758 1.967-1.267a9.972 9.972 0 0 0 1.61-1.612c.324-.373.622-.771.873-1.233a10.053 10.053 0 0 0 .79-2.167C20 11.564 20 9.917 19.653 8.356a9.861 9.861 0 0 0-.79-2.167 10.124 10.124 0 0 0-.873-1.233 9.995 9.995 0 0 0-1.61-1.612 9.895 9.895 0 0 0-1.233-.873 10.05 10.05 0 0 0-2.167-.79C11.564.09 10.782 0 10 0Zm0 5.4a4.598 4.598 0 1 0 0 9.196 4.598 4.598 0 0 0 0-9.196ZM6.6 10a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0Zm8.6-4.198a1.072 1.072 0 1 0 0-2.144 1.072 1.072 0 0 0 0 2.144Z" clipRule="evenodd"/>
                    </svg>
                    <span style={{ display: 'none' }}>Instagram page</span>
                </a>
                <a href="#" style={{ color: '#6B7280', marginLeft: '20px', ':hover': { color: '#1A202C' }, darkMode: { ':hover': { color: 'white' } } }}>
                    <svg style={{ width: '16px', height: '16px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 19">
                        <path fillRule="evenodd" d="M17.152 0c1.136 0 2.008.264 2.688.63.703.378 1.299.93 1.763 1.393.464.464.916 1.06 1.294 1.763.366.68.63 1.552.63 2.688v6.852c0 1.136-.264 2.008-.63 2.688-.378.703-.83 1.299-1.294 1.763-.464.464-1.06.916-1.763 1.294-.68.366-1.552.63-2.688.63H6.848c-1.136 0-2.008-.264-2.688-.63-.703-.378-1.299-.83-1.763-1.294-.464-.464-.916-1.06-1.294-1.763C.736 15.522.472 14.65.472 13.514V6.662c0-1.136.264-2.008.63-2.688.378-.703.83-1.299 1.294-1.763.464-.464 1.06-.916 1.763-1.294.68-.366 1.552-.63 2.688-.63H17.15ZM7.062 5.222h2.618L8.175 8.72H5.557l1.505-3.499Zm1.427 4.832c.53 0 .962.432.962.962s-.432.962-.962.962-.962-.432-.962-.962.432-.962.962-.962ZM16.998 9.7c.53 0 .962.432.962.962s-.432.962-.962.962-.962-.432-.962-.962.432-.962.962-.962Zm-2.324-4.479h2.618L16.11 8.72h-2.618l1.181-3.5Z" clipRule="evenodd"/>
                    </svg>
                    <span style={{ display: 'none' }}>YouTube channel</span>
                </a>
            </div>
        </div>
    </div>
</footer>


</div>
  )
}

export default Footer
