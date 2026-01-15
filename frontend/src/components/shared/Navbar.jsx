import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    }
    
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                    
                    {/* Auth Buttons - Simplified for debugging */}
                    <div className='flex items-center gap-2'>
                        {!user ? (
                            <>
                                <Link to="/login">
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
                                </Link>
                            </>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer h-10 w-10">
                                        <AvatarImage 
                                            src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"} 
                                            alt={user?.fullname} 
                                        />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className='flex gap-4 items-center mb-4'>
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage 
                                                    src={user?.profile?.profilePhoto || "https://github.com/shadcn.png"} 
                                                    alt={user?.fullname} 
                                                />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio || "No bio"}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 text-gray-600'>
                                            {user?.role === 'student' && (
                                                <div className='flex items-center gap-2 cursor-pointer'>
                                                    <User2 className='h-4 w-4' />
                                                    <Link to="/profile">
                                                        <Button variant="link" className='p-0'>View Profile</Button>
                                                    </Link>
                                                </div>
                                            )}
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <LogOut className='h-4 w-4' />
                                                <Button onClick={logoutHandler} variant="link" className='p-0'>
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar