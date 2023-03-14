import AuthLayout from "@/components/auth/AuthLayout";
import ResetYourPass from "@/components/auth/ConfirmPass";

export default function LoginPage() {
  return (
    <AuthLayout>
      <ResetYourPass />
    </AuthLayout>
  );
}
