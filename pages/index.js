import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
  // função título retorna características de estílo para textos
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 20px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}


// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  // const username = 'omariosouto';
  const [username, setUsername] = React.useState('mysecret');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
          backgroundColor: appConfig.theme.colors.primary[500],
          //backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_960_720.jpg)',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/07/08/06/56/fantasy-6396037_960_720.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', transitionProperty: 'all',
          
        }}
      >
        <Image src={'https://i.ibb.co/nBFKtxR/Novo-Projeto-1.png'} styleSheet={{height:'180px'}}/>
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '22px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            
            
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              //console.log('Alguém submeteu o form');
              // roteamento.push('/chat?username=' + username);
              roteamento.push(`/chat?username=${username}`);
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '70%', sm: '60%' }, textAlign: 'center', marginBottom: '20px'
            }}
          >

            <Titulo tag="h2" ><br></br>Histórias cabeludas?<br></br>Queremos saber!</Titulo>
            <Titulo tag="h3" styleSheet={{ font: '10px'}}><br></br>Ninguém saberá sua identidade.<br></br></Titulo>
            <Titulo tag="h4" >A menos que você queira, é claro.</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '25px', color: appConfig.theme.colors.neutrals[300] }}>
            <br></br>{appConfig.name}
            </Text>

            {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
            <TextField
              value={username}
              onChange={function (event) {
                //console.log('usuario digitou', event.target.value);
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                // através do React e avise quem precisa

                 setUsername(valor);
                
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            
            <Text variant="body4" styleSheet={{marginBottom: '10px', color: appConfig.theme.colors.neutrals[300] }}>
            Use seu nome de usuário do Discord (ou não).
            </Text>


            <Button
              type='submit'
              label='Confessar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[400],
                mainColorLight: appConfig.theme.colors.primary['050'],
                mainColorStrong: appConfig.theme.colors.primary[900],
                colorVariant: 'negative',

              }}
              variant='secondary'
            
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
              maxWidth: '230px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '300px',
            }}
          >

            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
                marginTop: '16px'
              }}

              src={(`https://github.com/${username}.png`)}
              
              {...username.startsWith('mysecret')
              
              ? ( console.log(username)
               //Image.src=('https://image.freepik.com/vetores-gratis/gato-preto-no-chapeu-de-bruxa_74855-739.jpg')
              ) 
              : (
                  //Image.src=(`https://github.com/${username}.png`),
                  console.log('não começa com mysecret')
                )
              
              }


            />




            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}