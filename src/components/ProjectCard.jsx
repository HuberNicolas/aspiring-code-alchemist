import "./ProjcetCard.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions, Chip, Stack} from '@mui/material';
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FaceIcon from '@mui/icons-material/Face';

export default function ProjectCard(props) {
    const { name, description, skills, repoLink } = props;

    return (
        <Card sx={{
            maxWidth: 400,
            backgroundColor: '#009688'
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Button  variant="contained" color="primary">Repository</Button>
                    </a>
                </CardActions>
                <div className={"skillList"}>
                    <Typography variant="body2" color="text.secondary">
                        Skills
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {skills.map((skill, index) => (
                            <Chip
                                key={index}
                                icon={<FontAwesomeIcon icon={skill.icon} />}
                                label={skill.skill}
                                color="primary"
                                sx={{
                                    marginRight: "5px",
                                    marginLeft: "5px",
                                    marginBottom: "5px"
                                }}
                            />
                        ))}
                    </Stack>
                </div>
            </CardActionArea>
        </Card>
    );
}
