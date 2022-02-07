import React from 'react'
import Image from 'next/dist/client/image'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostDetail = ({ post }) => {

    return (
        <div className='bg-gray-700 bg-opacity-30 rounded-lg lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden mb-6'>
                <img 
                    src={post.featureImage.url}
                    alt={post.title}
                    className='rounded-t-lg object-top h-full w-full'
                />
            </div>
            <div className='px-4 lg:px-0'>
                <div className='block lg:flex text-center mb-6 items-center justify-center w-full'>
                    <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                        <Image
                            unoptimized
                            alt={post.author.name}
                            height='50px'
                            width='50px'
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className='inline align-middle ml-4 text-lg'>{post.author.name}</p>
                    </div>
                    <div className='font-medium'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle font-thin">{moment(post.createdAt).format('MMM DD, YYYY')}</span> 
                    </div>
                </div>
                <h1 className='mb-8 text-2xl md:text-3xl font-semibold'>{post.title}</h1>
                


                <RichText 
                  content={post.content.raw}
                  renderers={{
                      p: ({ children }) => <p className='mb-4'>{children}</p>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-lg font-semibold mb-4">{children}</h4>,
                      bold: ({children}) => <b className='font-semibold'>{children}</b>,
                      italic: ({children}) => <em className=''>{children}</em>,
                      underline: ({ children }) => <u className=''>{children}</u>, 
                      ul: ({ children }) => <ul className='py-6'>{children}</ul>,
                      li: ({ children }) => <li className='flex items-center'><span className='text-3xl pb-1 pr-1'>•</span>{children}</li>,
                      a: ({ children, href }) => <a href={href} className='text-blue-400 hover:underline'>{children}</a>,
                      blockquote: ({ children }) => <blockquote className="italic border-l-4 border-gray-300 pl-6 mb-8 py-4 text-lg">{children}</blockquote>,
                      code_block: ({ children }) => <code className="text-xs mb-4 bg-gray-300  bg-opacity-50 rounded-lg p-4 border-2 border-gray-300 leading-loose block whitespace-pre overflow-x-scroll">{children}</code>,
                      img: ({ src, altText, height, width }) => (<div className='mb-4'><Image src={src} alt={altText} height={height} width={width} objectFit='cover'/></div>),
                  }}
                />
            </div>
        </div>
    )
}

export default PostDetail