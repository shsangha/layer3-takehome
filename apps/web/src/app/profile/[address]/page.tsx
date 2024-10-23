import ProfileModule from "@/modules/profile";

const ProfilePage = ({ params }: { params: { address: string } }) => {
  const { address } = params;

  return <ProfileModule address={address} />;
};

export default ProfilePage;
