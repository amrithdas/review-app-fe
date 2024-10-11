import React, { useEffect, useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
// import { AiOutlineMessage } from "react-icons/ai";
// import { SlUserFollowing } from "react-icons/sl";
import Navbar from "./navbar";
import Footer from "./footer";
import LoginModalManager from "../modals/loginModalManager";
import { useAuth } from "../modals/authContext";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import baseURL from "../config";
import { FaStar } from "react-icons/fa";
import { Box, Button, Container, TextField, Typography, List, ListItemText, Divider, Avatar, Paper, CircularProgress, ListItemButton, IconButton } from "@mui/material";
import Cookies from "js-cookie";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Profile Overview');
  const { handleSignupOpen, handleLoginOpen } = useAuth();
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [user, setUser] = useState<{ name: string; pincode: string; bio: string } | null>(null);
  const [location, setLocation] = useState<{ name: string; district: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<any[]>([]);
  const [editModeBio, setEditModeBio] = useState(false);
  const [newBio, setNewBio] = useState('');
  const [isEditingId, setIsEditingId] = useState(null);
  const [currentContent, setCurrentContent] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}accounts/profile/`,
          {
            withCredentials: true,
          });
        setUser(response.data);
        setNewBio(response.data.bio);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => setEditModeBio(true);

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBio(e.target.value);

  const handleBioSave = async () => {
    try {
      await axios.put(`${baseURL}accounts/profile/`, { bio: newBio },
        {
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
          withCredentials: true
        });
      setUser((prev) => prev ? { ...prev, bio: newBio } : prev);
      setEditModeBio(false);
    } catch (error) {
      console.error('Error updating bio:', error);
    }
  };

  useEffect(() => {
    const fetchReviewsCount = async () => {
      if (user) {
        try {
          const response = await axios.get(`${baseURL}restaurants/api/get-reviews/`, { withCredentials: true });
          setReviewCount(response.data.review_count);
        } catch (error) {
          console.error('Error fetching review count:', error);
        }
      }
    };
    fetchReviewsCount();
  }, [user]);

  useEffect(() => {
    const fetchLocationData = async () => {
      if (user?.pincode) {
        try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${user.pincode}`);
          const postOffices = response.data[0]?.PostOffice;
          if (postOffices && postOffices.length > 0) {
            setLocation({
              name: postOffices[0].Name,
              district: postOffices[0].District,
            });
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      }
    };

    fetchLocationData();
  }, [user]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (activeTab === 'Reviews' && user) {
        try {
          const response = await axios.get(`${baseURL}restaurants/api/get-user-reviews/`, { withCredentials: true });
          setReviews(response.data);
        } catch (error) {
          console.error('Error fetching user reviews:', error);
        }
      }
    };

    fetchUserReviews();
  }, [activeTab, user]);

  useEffect(() => {
    if (user !== null) setLoading(false);
  }, [user, reviewCount]);

  const handleEditReview = async (id: number) => {
    try {
      const response = await axios.put(
        `${baseURL}restaurants/api/edit-reviews/${id}/`, 
        { content: currentContent }, 
        {
          withCredentials: true,
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
        }
      );
  
      console.log(response.data.message);
      setReviews(prevReviews => {
        const updatedReviews = prevReviews.map(review => 
          review.id === id ? { ...review, description: currentContent } : review
        );
        return updatedReviews;
      });
      
      setIsEditingId(null);
      setCurrentContent('');
  
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };
  
  const handleDeleteReview = async (id: number) => {
    try {
      const response = await axios.delete(`${baseURL}restaurants/api/edit-reviews/${id}/`, {
        withCredentials: true,
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      });
      
      console.log(response.data.message);
      setReviews(prevReviews => prevReviews.filter(review => review.id !== id));
      
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Navbar onSignupClick={handleSignupOpen} onLoginClick={handleLoginOpen} isFixed={false} />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          <Box flex={1}>
            <Paper sx={{ p: 3, textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
              <Avatar src="images/ppic_1.png" sx={{ width: 128, height: 128, mx: 'auto' }} />
              {user && (
                <>
                  <Typography variant="h6" sx={{ mt: 2 }}>{user.name}</Typography>
                  {location && (
                    <Typography variant="body2" color="textSecondary">
                      {location.name}, {location.district}
                    </Typography>
                  )}
                  <Typography variant="body2">{reviewCount} Reviews</Typography>
                </>
              )}
              <List sx={{ mt: 4 }}>
                {['Profile Overview', 'Reviews'].map((tab) => (
                  <ListItemButton key={tab} onClick={() => setActiveTab(tab)} selected={activeTab === tab}>
                    <ListItemText primary={tab} />
                  </ListItemButton>
                ))}
                {/* Future feature links */}
                {/* <ListItem button><ListItemText primary="Photos and Videos" /></ListItem>
                <ListItem button><ListItemText primary="Compliments" /></ListItem>
                <ListItem button><ListItemText primary="Friends" /></ListItem> */}
              </List>
            </Paper>
          </Box>
          <Box flex={2}>
            <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
              {activeTab === 'Profile Overview' && (
                <Box sx={{ maxWidth: 600, mx: 'auto', bgcolor: '#f9f9f9', borderRadius: 2, p: 2 }}>
                  <Typography variant="h5">About Me</Typography>
                  {editModeBio ? (
                    <>
                      <TextField
                        label="Edit Bio"
                        multiline
                        rows={4}
                        value={currentContent}
                        onChange={handleBioChange}
                        fullWidth
                        sx={{ my: 2 }}
                      />
                      <Button onClick={handleBioSave} variant="contained" color="primary">Save</Button>
                    </>
                  ) : (
                    <>
                      <Typography variant="body1" sx={{ mb: 2 }}>{user?.bio || "No description available."}</Typography>
                      <Button onClick={handleEditClick} variant="outlined" color="primary">Edit</Button>
                    </>
                  )}
                </Box>
              )}
              {activeTab === 'Reviews' && (
                <>
                  <Typography variant="h5">Reviews</Typography>
                  <Divider sx={{ my: 2 }} />
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <Box key={review.id} sx={{ borderBottom: 1, borderColor: 'divider', pb: 2, mb: 2, position: 'relative' }}>
                        {isEditingId === review.id ? (
                          <>
                            <TextField
                              value={currentContent}
                              onChange={(e) => setCurrentContent(e.target.value)}
                              multiline
                              rows={4}
                              variant="outlined"
                              fullWidth
                              sx={{ mb: 2 }}
                            />
                            <Button onClick={() => handleEditReview(review.id)} variant="contained" color="primary" sx={{ mr: 2 }}>Save</Button>
                            <Button onClick={() => setIsEditingId(null)} variant="outlined" color="secondary">Cancel</Button>
                          </>
                        ) : (
                          <>
                            <Typography variant="h6">{review.restaurant_name}</Typography>
                            <Box sx={{ display: 'flex', mb: 1 }}>
                              {Array.from({ length: 5 }, (_, i) => (
                                <FaStar key={i} className={`${i < review.rating ? 'text-white bg-yellow-400 rounded p-1' : 'text-white bg-gray-100 rounded p-1'} text-xl mx-1`} />
                              ))}
                            </Box>
                            <Typography variant="body2">{review.description}</Typography>
                            <Typography variant="caption" color="textSecondary">{new Date(review.created_at).toLocaleString()}</Typography>
                          </>
                        )}
                        <IconButton
                          sx={{ position: 'absolute', right: 45, top: 5 }}
                          onClick={() => {
                            setIsEditingId(review.id);
                            setCurrentContent(review.content);
                          }}
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton
                          sx={{ position: 'absolute', right: 5, top: 5 }}
                          onClick={() => handleDeleteReview(review.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    ))
                  ) : (
                    <Typography>No reviews found.</Typography>
                  )}
                </>
              )}
              {/* Future feature content */}
              {/* {activeTab === 'Photos and Videos' && <Typography>Photos and videos content goes here...</Typography>}
              {activeTab === 'Compliments' && <Typography>Compliments content goes here...</Typography>}
              {activeTab === 'Friends' && <Typography>Friends content goes here...</Typography>} */}
            </Paper>
          </Box>
        </Box>
      </Container>
      <Footer />
      <LoginModalManager />
    </>
  );
};

export default Profile;
