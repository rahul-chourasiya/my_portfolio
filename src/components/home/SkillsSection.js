import React, { useEffect, useRef } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { Grid2 } from '@mui/material';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import mui from '../../Assets/mui.png';
import bootstrap from '../../Assets/bootstrap.png';
import { motion } from 'framer-motion';

// Skills data with gradients and descriptions
const skills = [
  {
    icon: faHtml5,
    color: '#f25a07',
    gradient: 'linear-gradient(45deg, #f25a07, #ff6f00)',
    label: 'HTML5',
    ariaLabel: 'HTML5 skill icon for semantic web development',
    description: 'Crafting semantic web structures',
  },
  {
    icon: faCss3Alt,
    color: '#74C0FC',
    gradient: 'linear-gradient(45deg, #74C0FC, #2563eb)',
    label: 'CSS3',
    ariaLabel: 'CSS3 skill icon for advanced styling and animations',
    description: 'Modern styling & animations',
  },
  {
    icon: faJs,
    color: '#FFD43B',
    gradient: 'linear-gradient(45deg, #FFD43B, #ca8a04)',
    label: 'JavaScript',
    ariaLabel: 'JavaScript skill icon for dynamic web functionality',
    description: 'Powering dynamic interactions',
  },
  {
    icon: faReact,
    color: '#74C0FC',
    gradient: 'linear-gradient(45deg, #74C0FC, #06b6d4)',
    label: 'React',
    ariaLabel: 'React skill icon for building user interfaces',
    description: 'Building interactive UIs',
  },
  {
    src: mui,
    alt: 'Material UI',
    gradient: 'linear-gradient(45deg, #1976d2, #60a5fa)',
    label: 'MUI',
    ariaLabel: 'Material UI skill logo for component-based design',
    description: 'Component-driven design',
  },
  {
    src: bootstrap,
    alt: 'Bootstrap',
    gradient: 'linear-gradient(45deg, #7b1fa2, #d81b60)',
    label: 'Bootstrap',
    ariaLabel: 'Bootstrap skill logo for responsive frameworks',
    description: 'Responsive frameworks',
  },
];

// SkillCard Component
const SkillCard = ({ icon, src, color, gradient, alt, label, ariaLabel, description, index }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    // Entrance animation
    gsap.fromTo(
      cardElement,
      { opacity: 0, y: 150, rotationX: -90, rotationY: index % 2 ? 90 : -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1.2,
        delay: index * 0.3,
        ease: 'elastic.out(1, 0.5)',
      }
    );

    // Hover tilt effect
    const handleMouseMove = (e) => {
      const rect = cardElement.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(cardElement, {
        rotationY: x * 0.1,
        rotationX: -y * 0.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardElement, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    cardElement.addEventListener('mousemove', handleMouseMove);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      cardElement.removeEventListener('mousemove', handleMouseMove);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <Grid2
      size={{ xs: 6, sm: 4, md: 2 }}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Stack
        ref={cardRef}
        alignItems="center"
        sx={{
          p: 5,
          borderRadius: 8,
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          width: { xs: 170, sm: 190 },
          height: { xs: 190, sm: 210 },
          background: gradient,
          position: 'relative',
          overflow: 'hidden',
          border: `2px solid rgba(255, 255, 255, 0.1)`,
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4), 0 0 30px ${color}`,
            '& .skill-desc': {
              opacity: 1,
              transform: 'translateX(0)',
            },
            '&::before': {
              opacity: 1,
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 8,
            boxShadow: `0 0 25px ${color}, 0 0 40px ${color}`,
            opacity: 0,
            transition: 'opacity 0.4s ease',
          },
          '&:focus': {
            boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4), 0 0 30px ${color}`,
            outline: 'none',
          },
        }}
        role="img"
        aria-label={ariaLabel}
        aria-describedby={`skill-desc-${index}`}
        tabIndex={0}
        onMouseEnter={() => {
          gsap.to(iconRef.current, {
            scale: 1.5,
            rotation: 20,
            y: -15,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(descRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        }}
        onMouseLeave={() => {
          gsap.to(iconRef.current, {
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(descRef.current, {
            opacity: 0,
            x: 30,
            duration: 0.4,
            ease: 'power2.out',
          });
        }}
        onClick={() => {
          gsap.to(cardRef.current, {
            scale: 0.9,
            rotation: 5,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
          });
        }}
      >
        {icon ? (
          <Box ref={iconRef}>
            <FontAwesomeIcon
              icon={icon}
              style={{ color, height: 85, filter: `drop-shadow(0 0 12px ${color})` }}
            />
          </Box>
        ) : (
          <Box ref={iconRef}>
            <img
              src={src}
              alt={alt}
              style={{ height: 85, width: 'auto', filter: `drop-shadow(0 0 12px ${color})` }}
              loading="lazy"
            />
          </Box>
        )}
        <Typography
          variant="body2"
          sx={{
            mt: 4,
            fontWeight: 800,
            textAlign: 'center',
            color: '#fff',
            fontSize: { xs: '1.2rem', sm: '1.3rem' },
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {label}
        </Typography>
        <Box
          ref={descRef}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '65%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.85)',
            p: 2,
            transform: 'translateX(100%)',
            display: 'flex',
            alignItems: 'center',
            opacity: 0,
          }}
          className="skill-desc"
          id={`skill-desc-${index}`}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#e2e8f0',
              textAlign: 'center',
              fontSize: { xs: '0.9rem', sm: '0.95rem' },
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Grid2>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const sparkles = sparkleRef.current;
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.style.position = 'absolute';
      sparkle.style.width = '4px';
      sparkle.style.height = '4px';
      sparkle.style.background = 'rgba(255, 255, 255, 0.8)';
      sparkle.style.borderRadius = '50%';
      sparkle.style.boxShadow = '0 0 10px rgba(59,130,246,0.7)';
      sparkles.appendChild(sparkle);

      gsap.to(sparkle, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * sparkles.offsetHeight,
        scale: () => Math.random() * 0.5 + 0.5,
        opacity: () => Math.random() * 0.5 + 0.3,
        duration: () => Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    }
  }, []);

  return (
    <Box
      sx={{
        py: 14,
        bgcolor: '#0f172a',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Sparkles */}
      <Box ref={sparkleRef} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      {/* Animated Background Orb */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.5), rgba(168,85,247,0.3))',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        component={motion.div}
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          textAlign: 'center',
          mb: 9,
          color: '#e2e8f0',
          letterSpacing: 4,
          fontSize: { xs: '2.6rem', sm: '3.5rem' },
          textShadow: '0 0 12px rgba(59,130,246,0.8), 0 0 24px rgba(168,85,247,0.6)',
          position: 'relative',
          zIndex: 2,
          animation: 'glitch 3s infinite alternate',
          '@keyframes glitch': {
            '0%': { transform: 'translate(0)', opacity: 1 },
            '2%': { transform: 'translate(2px, -2px)', opacity: 0.8 },
            '4%': { transform: 'translate(-2px, 2px)', opacity: 1 },
            '100%': { transform: 'translate(0)', opacity: 1 },
          },
        }}
      >
        Skill Galaxy
      </Typography>
      <Grid2
        container
        spacing={6}
        sx={{
          justifyContent: 'center',
          px: { xs: 3, sm: 6 },
          position: 'relative',
          zIndex: 2,
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.label} {...skill} index={index} />
        ))}
      </Grid2>
    </Box>
  );
};

export default SkillsSection;
