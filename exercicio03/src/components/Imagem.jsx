function Imagem() {
    const linkan = [
        { urli: "https://imgs.search.brave.com/65Io054dQhiyXjeQO-B588zfHjqc094nsekxgtAvXvM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM5Lzg5/L2MxLzM5ODljMTQz/YmU0ZjQ4MTkwMTk3/ZmUxOTQwMGUzOGI1/LmpwZw" ,},
        { urli: "https://imgs.search.brave.com/po4gCpYZ6xbE6uACAlab8RpFj_z_3aai6WjQzkG20VA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2LzA3/LzU0LzE2MDc1NDRk/ODM4ZjE4MjE4MWQw/Yzg1YmEzNTg2N2U5/LmpwZw" ,},
        { urli: "https://imgs.search.brave.com/kcMt6upqHbBltZgm3O2HALYwsTCNPTeDkpjXurxS3H0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlL2Fm/L2U0LzdlYWZlNDc5/N2IxM2FmMjUwNmY5/OTIxMWY2ZDVlY2Jm/LmpwZw" ,},
    ]
    return (
        <>
        {linkan.map((link) => (
            <img src={link.urli} alt="" />
    ))}
    </>
    )
}
export default Imagem