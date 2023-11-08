'use client';

import { useEffect, useState } from 'react';
import userData from '../data/userData';
import Not_Found from '../components/404';
import { useSearchParams } from 'next/navigation';

export default function UserProfile() {

    const [profile, setProfile] = useState(null);

    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');

    function showPage(props) {
        props = setTimeout(() => {
            document.getElementById("loader").style.display = 'none';
            document.getElementById("myDiv").style.display = 'block';
        }, 100);
      }

    useEffect(() => {
        let endloader;

        const specificUser = userData.find(user => user.id === userId);
        setProfile(specificUser);
        showPage(endloader);

        return () => clearTimeout(endloader);
    }, [userId]);

    return (
        <div>
            {profile ? (
                <div>
                    <div id="loader"></div>
                    <div id='myDiv' className='animate-bottom'>
                        <h2>User Profile</h2>
                        <p>User ID: {profile.id}</p>
                    </div>
                </div>
            ) : (
                <Not_Found />
            )}
        </div>
    );
};
