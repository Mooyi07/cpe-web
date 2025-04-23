// scheduleData.js
import { db, collection, getDocs, query, limit } from '../firebase';

export const fetchScheduleData = async () => {
  const scheduleCollectionRef = collection(db, "schedule");
  
  // Fetch only first 20 documents for faster loading
  const scheduleSnapshot = await getDocs(query(scheduleCollectionRef, limit(20)));
  const scheduleList = scheduleSnapshot.docs.map((doc) => doc.data());

  return scheduleList;
};
