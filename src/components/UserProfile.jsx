
// UserProfile.js
import React from 'react';
import { motion } from 'framer-motion';

const UserProfile = ({ profileInfo }) => {
return (
<motion.div
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
>
<motion.p className="text-yellow-600 text-sm">
<strong>خوش آمدید</strong>{profileInfo.name}
<span className="text-blue-400 text-sm p-2">

</span>
</motion.p>
</motion.div>
);
};

export default UserProfile;
