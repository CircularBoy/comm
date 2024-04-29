import Button from "@mui/material/Button";

const mainMenu = [
  {
    title: 'Create pay',
    href: 'create-pay'
  },
  {
    title: 'Pays',
    href: 'pays'
  },
  {
    title: 'Houses',
    href: 'houses'
  },
]

const MainMenu = () => {
  return (<>
    {
      mainMenu.map((item, i) => {
        return <Button key={i} href={item.href} sx={{ my: 2, color: 'white', display: 'block' }}>
          {item.title}
        </Button>
      })
    }
  </>)
}

export default MainMenu
