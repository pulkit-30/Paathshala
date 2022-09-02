import Head from "next/head";
import React from "react";
import RecentActivity from "../../../components/sidebar/RecentActivity";
import styles from "../../../styles/profile.module.css";
import Navbar from "../../../components/header/Navbar";
import ProfileCover from "../../../components/ui/ProfileCover";
import ProfileDetails from "../../../components/ui/ProfileDetails";
import ProfileTabs from "../../../components/ui/ProfileTabs";
import { useRouter } from "next/router";

const UserProfile = ({ data }) => {
  return (
    <React.Fragment>
      <Head>
        <title>User Profile - Paathshaala</title>
      </Head>
      <div className="flex f-space-eve f-start">
        <div className={styles.user_profile_section}>
          <div className="f-column">
            {/* <ProfileHeader username="User Name"/> */}
            <Navbar>
              <h3>Profile</h3>
            </Navbar>
            <ProfileCover />
            <div className={styles.profile_details}>
              <ProfileDetails
                username={data.slug}
                role={data.role}
                image="/static/images/avatar/1.jpg"
              />
            </div>
            <ProfileTabs />
          </div>
        </div>
        <section className="section_activity">
          <RecentActivity />
        </section>
      </div>
    </React.Fragment>
  );
};
export default UserProfile;

export async function getServerSideProps(context) {
  const { userId } = context.query;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}`);
  const data = await res.json();
  return { props: { data } };
}
