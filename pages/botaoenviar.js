
//<>{{ function console.log(...username.startsWith('confissoesdamadrugada'))?}}</>

//

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