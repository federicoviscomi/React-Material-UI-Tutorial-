import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";

const itemData = [
    {
        img: 'https://picsum.photos/200/300',
        title: 'rand1'
    },
    {
        img: 'https://picsum.photos/200/300',
        title: 'rand2'
    },
    {
        img: 'https://picsum.photos/200/300',
        title: 'rand3'
    },
    {
        img: 'https://picsum.photos/200/300',
        title: 'rand4'
    }
];

export const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList
                sx={{ widht: 500, height: 450, columns: 3 }}
                rowHeight={164}>
                {
                    itemData.map(({ img, title }) => {
                        return (
                            <ImageListItem
                                key={img}>
                                <img src={img} alt={title} loading="lazy"></img>
                                <ImageListItemBar title={title}></ImageListItemBar>
                            </ImageListItem>
                        );
                    })
                }
            </ImageList>

            <ImageList
                variant='woven'
                gap={8}
                sx={{ widht: 500, height: 450, columns: 3 }}
                rowHeight={164}>
                {
                    itemData.map(({ img, title }) => {
                        return <ImageListItem
                            key={img}>
                            <img src={img} alt={title} loading="lazy"></img>

                        </ImageListItem>;
                    })
                }
            </ImageList>

            <Box
                sx={{ widht: 500, height: 450, columns: 3, overflowY: 'scroll' }}
            >
                <ImageList
                    variant='masonry'
                    gap={8}
                    rowHeight={164}>
                    {
                        itemData.map(({ img, title }) => {
                            return <ImageListItem
                                key={img}>
                                <img src={img} alt={title} loading="lazy"></img>

                            </ImageListItem>;
                        })
                    }
                </ImageList>
            </Box>
        </Stack>
    );
};