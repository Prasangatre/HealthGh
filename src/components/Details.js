import React, { useEffect } from 'react'
import styled from 'styled-components'
const Details = () => {
  const getDatafromLS = () => {
    const mydata = localStorage.getItem('doctors')

    if (mydata) {
      return JSON.parse(mydata)
    } else {
      return []
    }
  }

  const Newdata = getDatafromLS()
  console.log('my new data isfff', Newdata)
  const [{ name, age, gender, date, notes, details }] = Newdata
  console.log('new name founf', name, age, gender, date, notes, details)

  const Main = styled.div`
    background: #f1f1f1;

    height: 100vh;
    width: 50vw;
    border: 1px solid blue;
    margin-left: 23%;
  `
  const Heading = styled.div`
    text-align: center;
    font-size: 1.9em;
    font-weight: 200;
  `
  const Subheading = styled.div`
    text-align: center;
    font-size: 1em;
  `
  const Line = styled.div`
    border-bottom: 2px solid blue;
  `
  const Generaldiv = styled.div`
    display: flex;
    font-size: 20px;
    margin: 12px;
  `
  const Inputbox = styled.div`
    font-size: 23px;
    border-bottom: solid blue;
    text-align: center;
    margin-top: -3px;
    padding: 2px;
    width: 25%;
  `
  const Inputbox1 = styled.div`
    font-size: 23px;
    border-bottom: solid blue;
    text-align: center;
    margin-top: -3px;
    padding: 2px;
    width: 25%;
  `
  const Paradiv = styled.div`
    font-size: 1.5rem;

    background: #d1d1ed;
    justify-content: center;

    flex-direction: column;
  `
  const Notes = styled.div``
  const Details = styled.div``
  const Footeerdiv = styled.div`
    margin-top: 108px;
    border-top: 1px solid blue;
    text-align: center;
  `
  const DoctorSign = styled.div`
    display: flex;
    margin-top: 294px;
    margin-left: 585px;
  `

  return (
    <Main>
      <Heading>ABC HOSPITAL</Heading>
      <Subheading>
        Dr. John killer<br></br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
        quibusdam!
      </Subheading>

      <Line> </Line>

      <Generaldiv>
        Patients Name: <Inputbox> {name}</Inputbox>
        Age:<Inputbox>{age}</Inputbox>
        Gender:<Inputbox>{gender}</Inputbox>
      </Generaldiv>
      <Generaldiv>
        Date:<Inputbox1>{date}</Inputbox1>
      </Generaldiv>
      <Paradiv>
        <Notes>Medical-Notes:{notes}</Notes>
        <Details> Details of Medicine:{details}</Details>
      </Paradiv>
      <DoctorSign>
        Doctor's Signature:<Inputbox1></Inputbox1>
      </DoctorSign>
      <Footeerdiv>
        <topmargin>www.hospital@gmail.com</topmargin>
      </Footeerdiv>
    </Main>
  )
}

export default Details
