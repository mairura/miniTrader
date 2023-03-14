import AuthLayout from "@/components/auth/AuthLayout";
import PassReset from "@/components/auth/ResetPass";

export default function LoginPage() {
  return (
    <AuthLayout>
      <PassReset />
    </AuthLayout>
  );
}
