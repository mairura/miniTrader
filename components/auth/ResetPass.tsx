import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useState, CSSProperties } from 'react'
import { Form } from '../common/Form'
import { Input } from '../common/Input'
import { Label } from '../common/Label'
import LeftChevron from '../common/LeftChevron'
import {
  AuthButton,
  AuthTitle,
  PassContainer,
  PassData,
  PassTitle,
} from './Auth.styles'
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};


const USER_PASSRESET = gql`
  mutation RequestPasswordChange($email: String!) {
    requestPasswordChange(data:{email: $email}) {
      success
      error
      data {
        email
        message
      }
    }
  }
`

export default function PassReset() {
  const [resetParams, setResetParams] = useState<{ email: string }>({
    email: '',
  })

  const router = useRouter()
  const [requestPasswordChange, {loading, error, data}] = useMutation(USER_PASSRESET, {
    onCompleted: (data: any) => {
      if (data.requestPasswordChange.success == true) {
        router.push('/success')
      }
    },
  })
  const handlePassReset = (e: any) => {
    e.preventDefault()
    requestPasswordChange({ variables: { email: resetParams.email },})
  };

  const handleSetResetParams = (e: { target: { value: any; id: any } }) => {
    setResetParams({ ...resetParams, [e.target.id]: e.target.value })
  }

  if (loading) {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
        <HashLoader
          color="blue"
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  if(error){
    alert(error);
  }

  return (
    <PassContainer>
      <PassData>
        <AuthTitle>Reset Password</AuthTitle>
        <PassTitle>Don&#39;t fret, we’ll send you reset instructions</PassTitle>
      </PassData>
      <Form>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" onChange={handleSetResetParams} />
        <AuthButton type="submit" onClick={(e) => handlePassReset(e)}>
          Reset Password
        </AuthButton>
        <LeftChevron />
      </Form>
    </PassContainer>
  )
}
