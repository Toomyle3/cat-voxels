'use client'
import Chakra from "@/component/chakra";
import dynamic from 'next/dynamic';
import VoxelDogLoader from '../component/voxel-dog-loader';

const LazyVoxelDog = dynamic(() => import('../component/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
export default function Home() {
  return (
   <Chakra>
    <LazyVoxelDog />
   </Chakra>
  );
}
