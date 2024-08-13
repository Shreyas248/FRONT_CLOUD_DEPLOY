// "use client";

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Edit, Plus, TrashIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetFooter
// } from "@/components/ui/sheet";
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';

// const AdminUsers = () => {
//   const [open, setOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [startTime, setStartTime] = useState('12:00 AM');
//   const [endTime, setEndTime] = useState('12:00 PM');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     invoice: '',
//     paymentStatus: '',
//     class: '',
//     totalAmount: '',
//     paymentMethod: ''
//   });
//   const [users, setUsers] = useState([
//     {
//       id: "1",
//       invoice: "INV001",
//       paymentStatus: "Active",
//       class: "WebApp",
//       totalAmount: "₹6500.00",
//       hours: "52",
//     },
//     {
//       id: "2",
//       invoice: "INV002",
//       paymentStatus: "Inactive",
//       class: "React",
//       totalAmount: "₹9875.00",
//       hours: "79",
//     },
//     {
//       id: "3",
//       invoice: "INV003",
//       paymentStatus: "Inactive",
//       class: " Sequeal ",
//       totalAmount: "₹5875.00",
//       hours: "47",
//     },
//     {
//       id: "4",
//       invoice: "INV004",
//       paymentStatus: "Active",
//       class: " SpringBoot ",
//       totalAmount: "₹10875.00",
//       hours: "87",
//     },
//     {
//       id: "5",
//       invoice: "INV005",
//       paymentStatus: "Active",
//       class: " Flutter ",
//       totalAmount: "₹8125.00",
//       hours: "65",
//     },
//     {
//       id: "6",
//       invoice: "INV006",
//       paymentStatus: "Inactive",
//       class: " Tailwind-Vite ",
//       totalAmount: "₹9625.00",
//       hours: "77",
//     },
//   ]);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       invoice: user.invoice,
//       paymentStatus: user.paymentStatus,
//       class: user.class,
//       hours: user.hours,
//       totalAmount: user.totalAmount,
//       paymentMethod: user.paymentMethod
//     });
//     setStartTime('12:00 AM'); // Initialize with actual value if needed
//     setEndTime('12:00 PM');   // Initialize with actual value if needed
//     setEditOpen(true);
//   };

//   const handleDeleteClick = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//   };

//   const handleSaveChanges = () => {
//     if (selectedUser) {
//       setUsers(users.map(user => 
//         user.id === selectedUser.id ? { ...user, ...formData } : user
//       ));
//     }
//     setEditOpen(false);
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: (users.length + 1).toString(),
//       ...formData
//     };
//     setUsers([...users, newUser]);
//     setOpen(false);
//     // Reset form data
//     setFormData({
//       invoice: '',
//       paymentStatus: '',
//       class: '',
//       hours: '',
//       totalAmount: ''
//     });
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   return (
//     <div className="w-full flex flex-col items-right pt-16 ">
//       <div className='m-1 p-4'>
//         <Card className='shadow-sm shadow-primary'>
//           <CardHeader className='w-full flex flex-row justify-between items-center'>
//             <CardTitle>Users</CardTitle>
//             <Button onClick={() => setOpen(!open)}>
//               <Plus className='h-10 w-10 mr-2' /> Add
//             </Button>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-[100px]">Staff ID</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Class</TableHead>
//                   <TableHead>Hours</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead className="flex justify-center">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {users.map((user) => (
//                   <TableRow key={user.id}>
//                     <TableCell className="font-medium">{user.invoice}</TableCell>
//                     <TableCell>{user.paymentStatus}</TableCell>
//                     <TableCell>{user.class}</TableCell>
//                     <TableCell>{user.hours}</TableCell>
//                     <TableCell>{user.totalAmount}</TableCell>
//                     <TableCell>
//                       <span className='w-full h-full flex justify-center items-center gap-3'>
//                         <Edit 
//                           className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' 
//                           onClick={() => handleEditClick(user)} 
//                         />
//                         <TrashIcon 
//                           className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' 
//                           onClick={() => handleDeleteClick(user.id)} 
//                         />
//                       </span>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         {/* Add User Sheet */}
//         <Sheet open={open} onOpenChange={() => setOpen(false)}>
//           <SheetContent className="overflow-y-auto max-h-full">
//             <SheetHeader>
//               <SheetTitle>Add User</SheetTitle>
//               {/* <SheetClose onClick={() => setOpen(false)}>
//                 <X className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-800' />
//               </SheetClose> */}
//             </SheetHeader>
//             <div className="grid gap-4 py-4">
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="invoice" className="text-right">Staff ID</Label>
//                 <Input id="invoice" value={formData.invoice} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="paymentStatus" className="text-right">Name</Label>
//                 <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="class" className="text-right">Class</Label>
//                 <Input id="class" value={formData.class} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="hours" className="text-right">Hours</Label>
//                 <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
//                 <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
//               </div>

//               <div className='flex flex-row gap-6'>
//                 <div className="flex flex-col items-start gap-5">
//                   <Label htmlFor="startTime" className="text-right">Start Time</Label>
//                   <TimePicker
//                     onChange={setStartTime}
//                     value={startTime}
//                     format="hh:mm a"
//                     className="col-span-3"
//                     clearIcon={null}
//                     clockIcon={null}
//                     disableClock={true}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start gap-5">
//                   <Label htmlFor="endTime" className="text-right">End Time</Label>
//                   <TimePicker
//                     onChange={setEndTime}
//                     value={endTime}
//                     format="hh:mm a"
//                     className="col-span-3"
//                     clearIcon={null}
//                     clockIcon={null}
//                     disableClock={true}
//                   />
//                 </div>
//               </div>
//             </div>
//             <SheetFooter className='flex flex-col flex-1'>
//               <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(false)}>Cancel</Button>
//               <Button type="submit" className='w-1/2' onClick={handleAddUser}>Add User</Button>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>

//         {/* Edit User Sheet */}
//         <Sheet open={editOpen} onOpenChange={() => setEditOpen(false)}>
//           <SheetContent className="overflow-y-auto max-h-full">
//             <SheetHeader>
//               <SheetTitle>Edit User</SheetTitle>
//             </SheetHeader>
//             <div className="grid gap-4 py-4">
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="invoice" className="text-right">Staff ID</Label>
//                 <Input id="invoice" value={formData.invoice} disabled className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="paymentStatus" className="text-right">Name</Label>
//                 <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="class" className="text-right">Class</Label>
//                 <Input id="class" value={formData.class} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="hours" className="text-right">Hours</Label>
//                 <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
//               </div>
//               <div className="flex flex-col items-start gap-4">
//                 <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
//                 <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
//               </div>
              
//               <div className='flex flex-row gap-6'>
//                 <div className="flex flex-col items-start gap-5">
//                   <Label htmlFor="startTime" className="text-right">Start Time</Label>
//                   <TimePicker
//                     onChange={setStartTime}
//                     value={startTime}
//                     format="hh:mm a"
//                     className="col-span-3"
//                     clearIcon={null}
//                     clockIcon={null}
//                     disableClock={true}
//                   />
//                 </div>
//                 <div className="flex flex-col items-start gap-5">
//                   <Label htmlFor="endTime" className="text-right">End Time</Label>
//                   <TimePicker
//                     onChange={setEndTime}
//                     value={endTime}
//                     format="hh:mm a"
//                     className="col-span-3"
//                     clearIcon={null}
//                     clockIcon={null}
//                     disableClock={true}
//                   />
//                 </div>
//               </div>
//             </div>
//             <SheetFooter className='flex flex-col flex-1'>
//               <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setEditOpen(false)}>Cancel</Button>
//               <Button type="submit" className='w-1/2' onClick={handleSaveChanges}>Save changes</Button>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// };

// export default AdminUsers;

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [startTime, setStartTime] = useState('12:00 AM');
  const [endTime, setEndTime] = useState('12:00 PM');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    invoice: '',
    paymentStatus: '',
    className: '',
    totalAmount: '',
    hours: '',
    paymentMethod: ''
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch("http://localhost:7770/api/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      invoice: user.invoice,
      paymentStatus: user.paymentStatus,
      className: user.className,
      hours: user.hours,
      totalAmount: user.totalAmount,
      paymentMethod: user.paymentMethod
    });
    setStartTime('12:00 AM');
    setEndTime('12:00 PM');
    setEditOpen(true);
  };

  const handleDeleteClick = (userId) => {
    fetch(`http://localhost:7770/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  const handleSaveChanges = () => {
    if (selectedUser) {
      fetch(`http://localhost:7770/api/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(updatedUser => {
          setUsers(users.map(user => 
            user.id === selectedUser.id ? updatedUser : user
          ));
          setEditOpen(false);
        })
        .catch(error => console.error("Error updating user:", error));
    }
  };

  const handleAddUser = () => {
    fetch('http://localhost:7770/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newUser => {
        setUsers([...users, newUser]);
        setOpen(false);
        setFormData({
          invoice: '',
          paymentStatus: '',
          className: '',
          hours: '',
          totalAmount: ''
        });
      })
      .catch(error => console.error("Error adding user:", error));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="w-full flex flex-col items-right pt-16">
      <div className='m-1 p-4'>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader className='w-full flex flex-row justify-between items-center'>
            <CardTitle>Users</CardTitle>
            <Button onClick={() => setOpen(!open)}>
              <Plus className='h-10 w-10 mr-2' /> Add
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Staff ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="flex justify-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.invoice}</TableCell>
                    <TableCell>{user.paymentStatus}</TableCell>
                    <TableCell>{user.className}</TableCell>
                    <TableCell>{user.hours}</TableCell>
                    <TableCell>{user.totalAmount}</TableCell>
                    <TableCell>
                      <span className='w-full h-full flex justify-center items-center gap-3'>
                        <Edit 
                          className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' 
                          onClick={() => handleEditClick(user)} 
                        />
                        <TrashIcon 
                          className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' 
                          onClick={() => handleDeleteClick(user.id)} 
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add User Sheet */}
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
          <SheetContent className="overflow-y-auto max-h-full">
            <SheetHeader>
              <SheetTitle>Add User</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="invoice" className="text-right">Staff ID</Label>
                <Input id="invoice" value={formData.invoice} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentStatus" className="text-right">Name</Label>
                <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="className" className="text-right">Class</Label>
                <Input id="className" value={formData.className} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="hours" className="text-right">Hours</Label>
                <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
                <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
              </div>

              <div className='flex flex-row gap-6'>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="startTime" className="text-right">Start Time</Label>
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    disableClock={true}
                    format='hh:mm a'
                    className='col-span-3 text-primary dark:text-background'
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="endTime" className="text-right">End Time</Label>
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    disableClock={true}
                    format='hh:mm a'
                    className='col-span-3 text-primary dark:text-background'
                  />
                </div>
              </div>
            </div>
            <SheetFooter>
              <Button type="submit" onClick={handleAddUser}>Add User</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Edit User Sheet */}
        <Sheet open={editOpen} onOpenChange={() => setEditOpen(false)}>
          <SheetContent className="overflow-y-auto max-h-full">
            <SheetHeader>
              <SheetTitle>Edit User</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="invoice" className="text-right">Staff ID</Label>
                <Input id="invoice" value={formData.invoice} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentStatus" className="text-right">Name</Label>
                <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="className" className="text-right">Class</Label>
                <Input id="className" value={formData.className} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="hours" className="text-right">Hours</Label>
                <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
                <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
              </div>

              <div className='flex flex-row gap-6'>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="startTime" className="text-right">Start Time</Label>
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    disableClock={true}
                    format='hh:mm a'
                    className='col-span-3 text-primary dark:text-background'
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="endTime" className="text-right">End Time</Label>
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    disableClock={true}
                    format='hh:mm a'
                    className='col-span-3 text-primary dark:text-background'
                  />
                </div>
              </div>
            </div>
            <SheetFooter>
              <Button type="submit" onClick={handleSaveChanges}>Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default AdminUsers;
