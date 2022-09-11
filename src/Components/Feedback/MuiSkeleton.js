import { Skeleton, Stack,Box,Avatar,Typography } from "@mui/material";
import {useState,useEffect} from 'react'
function MuiSkeleton() {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
    <>
        <Stack spacing={4} direction='row'>

            <Box>
                <Stack spacing={1} width="250px">
                    <Skeleton variant="text" /> {/*default variant*/}
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={250} height={125} />
                </Stack>
                <Stack spacing={1} width="250px">
                    <Skeleton variant="text" animation="wave" /> {/*default variant*/}
                    <Skeleton variant="circular" width={40} height={40} animation="wave" />
                    <Skeleton
                    variant="rectangular"
                    width={250}
                    height={125}
                    animation="wave"
                    />
                </Stack>
                <Stack spacing={1} width="250px">
                    <Skeleton variant="text" animation={false} /> {/*default variant*/}
                    <Skeleton variant="circular" width={40} height={40} animation={false} />
                    <Skeleton
                    variant="rectangular"
                    width={250}
                    height={125}
                    animation={false}
                    />
                </Stack>
            </Box>
            <Box sx={{width:'250px'}}>
                Reloading screen to see effect
                {
                    loading ? (
                        <Skeleton varaint='rectangular' width='256px' height={144} animation='wave'/>
                    ):(
                        <img src="https://source.unsplash.com/random/256x144" alt="skeleton" width={256} height={144}/>
                    )
                }
                <Stack spacing={1} direction='row' sx={{width:'100%',marginTop:'12px'}}>
                    {
                        loading?(
                            <Skeleton variant='circular' animation='wave' width={40} height={40}/>
                        ):(
                            <Avatar>PV</Avatar>
                        )
                    }
                
                    <Stack sx={{width:'80%'}}>
                        {
                            loading?(
                                <>
                                    <Typography variant="body1">
                                        <Skeleton varaint='text' width='100%' animation='wave'/>
                                    </Typography>
                                    <Typography variant="body2">
                                        <Skeleton varaint='text' width='100%' animation='wave'/>
                                    </Typography>
                                </>
                            ) : (
                                <><Typography variant='body1'>React MUI Pratice</Typography></>
                            )
                        }
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </>
  );
}

export default MuiSkeleton;
